export default function Parse(content: string) {
    const rules = [
        { pattern: /\/heading\{(.*?)\}/g, replace: "<h1>$1</h1>" },
        { pattern: /\/subheading\{(.*?)\}/g, replace: "<h2>$1</h2>" },
        { pattern: /\/underline\{(.*?)\}/g, replace: "<u>$1</u>" },
        { pattern: /\/point\{(.*?)\}/g, replace: "<li>$1</li>" },
        { pattern: /\/bold\{(.*?)\}/g, replace: "<b>$1</b>" },
        { pattern: /\/italic\{(.*?)\}/g, replace: "<i>$1</i>" },
        { pattern: /\/color\{(.*?):(.*?)\}/g, replace: "<span style='color:$1'>$2</span>" },
        { pattern: /\/size\{(.*?):(.*?)\}/g, replace: "<span style='font-size:$1'>$2</span>" },
    ]; 
    for (let rule of rules) {
        content = content.replace(rule.pattern, rule.replace)
    }
    return content
}