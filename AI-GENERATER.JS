// AI Business Content Generator
function generateBusinessContent(businessName, service, location) {
    // Simple template
    const content = `
    Welcome to ${businessName}!
    We provide top-notch ${service} services in ${location}.
    Contact us today and experience quality work!
    `;
    return content;
}

// Example usage:
const businessName = "Weld Expert Islamabad";
const service = "welding & fabrication";
const location = "Islamabad, G-6, G-7, G-8, F-6, F-7, I-8, Parliament Area";
const generatedContent = generateBusinessContent(businessName, service, location);

console.log(generatedContent);
