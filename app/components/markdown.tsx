"use client"
import Tutorial from '@/docs/tutorial.mdx'
import { MDXComponents } from 'mdx/types';

export default function Index(){
  return <Tutorial components={overrideComponents}/>
}

function CustomH1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}

function CustomH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      {children}
    </h2>
  );
}

function CustomH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

function CustomP({ children }: { children: React.ReactNode }) {
  return <div className="leading-7 [&:not(:first-child)]:mt-6">{children}</div>;
}

function CustomBlockquote({ children }: { children: React.ReactNode }) {
  return <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>;
}

function CustomUl({ children }: { children: React.ReactNode }) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}


function CustomOl({ children }: { children: React.ReactNode }) {
  return <ol className="my-6 ml-6 list-decimal [&>li]:mt-3">{children}</ol>;
}

function CustomLi({ children }: { children: React.ReactNode }) {
  return <li className="leading-7" >{children}</li>;
}


function CustomCode({ children }: { children: React.ReactNode }) {
  return <code className="bg-[#cba6f7]/20 p-0.5 rounded-sm">{children}</code>;
}
 
const overrideComponents: MDXComponents = {
  h1: CustomH1 as any,
  h2: CustomH2 as any,
  h3: CustomH3 as any,
  p: CustomP as any,
  blockquote: CustomBlockquote as any,
  ul: CustomUl as any,
  ol: CustomOl as any,
  li: CustomLi as any,
  code: CustomCode as any
}
 
