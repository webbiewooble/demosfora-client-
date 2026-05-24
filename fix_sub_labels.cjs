const fs = require('fs');

for (let file of ['index.html', 'subscribe.html']) {
    let content = fs.readFileSync(file, 'utf8');
    
    content = content.replace(/7-Day Pack Bundle/g, '7-Day Starter Pack');
    content = content.replace(/30-Day Pack Bundle/g, '30-Day Monthly Pack');
    
    // In index/subscribe Custom plan was named 'Custom Subscription'
    content = content.replace(/<h3>Custom Subscription<\/h3>/g, '<h3>Build Your Custom Plan</h3>');
    
    fs.writeFileSync(file, content);
    console.log("Updated labels in", file);
}
