// File types
export const fileTypesCode = `if file.endswith(('.py', '.js', '.java')):  # Add your desired file extensions`;

// Ignored directories
export const ignoredDirsCode = `dirs[:] = [d for d in dirs if d not in ['.git', 'node_modules', 'venv', 'build']]`;

// Lexer selection
export const lexerSelectionCode = `if extension == 'py':
    return PythonLexer()
elif extension in ['js', 'jsx']:
    return JavascriptLexer()
# Add more conditions for other file types`;

// GPT model
export const gptModelCode = `llm = ChatOpenAI(
    model="gpt-4o-mini",
    # model="gpt-4-32k",  # Change to your preferred model
    api_key=key,
    max_tokens=4096
)`;

// Prompt customization
export const promptCustomizationCode = `prompt = ChatPromptTemplate.from_messages([
    ("system", "You are an expert in software development. Your task is to provide a brief explanation of the given code and a short caption."),
    ("human", """
    Analyze the following code and provide:
    1. A brief explanation (40-60 words) of its purpose and functionality
    2. A short caption (10 words or less) summarizing the code's main function

    File Name: {file_name}

    Code Content:
    {file_content}

    Format your response as follows:
    Caption: [Your 10-word or less caption here]

    [Your 40-60 word explanation here]

    Ensure the explanation is informative yet brief, suitable for a quick overview of the file's contents.
    """
)]`;

// Pricing
export const pricingCode = `PRICE_PER_1M_INPUT_TOKENS = 0.25  # Adjust as needed
PRICE_PER_1M_OUTPUT_TOKENS = 1.25  # Adjust as needed`;

// Image customization
export const imageCustomizationCode = `style = get_style_by_name("monokai")  # Change to your preferred style
formatter = ImageFormatter(
    style=style,
    line_numbers=True,
    font_size=14,
    font_name="Consolas",  # Change to your preferred font
    line_number_separator=True,
    line_number_pad=3,
    hl_lines=[],
    line_number_bg="#272822",
    line_number_fg="#8f908a"
)`;
