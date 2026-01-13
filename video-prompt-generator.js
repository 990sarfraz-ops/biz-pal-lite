// video-prompt-generator.js
// Simple Urdu Video Script / Prompt Generator

function generateVideoPrompt(businessName, topic, durationMinutes) {
    // Default structure
    let script = `السلام علیکم! آج ہم بات کریں گے ${topic} کے بارے میں۔
یہ ویڈیو ${durationMinutes} منٹ کی ہے۔
اگر آپ ${businessName} کے بزنس کو بڑھانا چاہتے ہیں تو یہ معلومات آپ کے لیے بہت مفید ہوگی۔
ویڈیو کے آخر میں کال ٹو ایکشن: ہمارے بزنس سے رابطہ کریں یا مزید جاننے کے لیے ویب سائٹ وزٹ کریں۔
شکریہ!`;

    return script;
}

// Example usage
let examplePrompt = generateVideoPrompt("Weld Expert Islamabad", "ویلڈنگ بزنس", 3);
console.log(examplePrompt);
