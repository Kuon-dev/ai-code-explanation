import React, { SVGProps, useState, useEffect } from 'react'
import { toast } from 'sonner'

interface CodeBlockProps {
  code: string
  language: string
  isTerminal?: boolean
}

export default function CodeBlock({ code, language, isTerminal = false }: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>('')
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    loadShiki()
  }, [])

  const loadShiki = async () => {
    const { codeToHtml } = await import('shiki')
    const c = await codeToHtml(code, { lang: language, theme: 'catppuccin-mocha' })
    setHighlightedCode(c)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setIsCopied(true)
      toast.success('Copied to clipboard')
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      toast.error('Failed to copy text')
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="relative my-3 group ease-in-out">
      <style>{`
        .code-block-content code {
          counter-reset: step;
          counter-increment: step 0;
        }
        .code-block-content code .line::before {
          width: 1rem;
          margin-right: 1.5rem;
          display: inline-block;
          text-align: right;
          color: rgba(115,138,148,.4);
        }
        .code-block-content:not(.terminal) code .line::before {
          content: counter(step);
          counter-increment: step;
        }
        .code-block-content.terminal code .line::before {
          content: "$";
        }
      `}</style>
      <div 
        dangerouslySetInnerHTML={{ __html: highlightedCode }} 
        className={`code-block-content ${isTerminal ? 'terminal' : ''} *:p-4 *:bg-black *:rounded-md *:overflow-scroll *:text-sm *:font-mono *:max-h-96`}
      />
      <button
        onClick={copyToClipboard}
        className="ease-in-out group-hover:block hidden absolute top-2 right-2 p-2 bg-[#313244] hover:bg-[#6c7086] rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gray-500"
        aria-label="Copy to clipboard"
      >
        {isCopied ? (
          <CheckIcon className="w-5 h-5 text-green-400" />
        ) : (
          <RadixIconsClipboard className="w-5 h-5 text-gray-300" />
        )}
      </button>
    </div>
  )
}

export function RadixIconsClipboard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15" {...props}><path fill="currentColor" fillRule="evenodd" d="M5 2V1h5v1zm-.25-2A.75.75 0 0 0 4 .75V1h-.5A1.5 1.5 0 0 0 2 2.5v10A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 11.5 1H11V.75a.75.75 0 0 0-.75-.75zM11 2v.25a.75.75 0 0 1-.75.75h-5.5A.75.75 0 0 1 4 2.25V2h-.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5z" clipRule="evenodd"></path></svg>
  )
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"></path></svg>
  )
}
