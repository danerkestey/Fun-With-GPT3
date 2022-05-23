import { config } from "./config";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: config.OPENAI_ORG_ID,
    apiKey: config.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

let conversation = "";
let conversationArr = [];
// const conversation = [];
async function queryGpt3(query) {
    // let currentConversation = `Q: ${query}\nA:`;
    let currentConversation = `Q: ${query}\nA: `
    conversation += currentConversation;

    try {
        const completion = await openai.createCompletion("text-davinci-002", 
            {
                prompt: conversation,
                max_tokens: 90,
                temperature: 0.7
            }
        );

        const response = completion.data.choices[0].text.replace("\n\n", "");
        currentConversation += `${response}\n\n`
        conversation += currentConversation;
        conversationArr.unshift(currentConversation);
        return conversationArr;
    
    } catch(err) { return "Couldn't get a response for that!"; }
}

export { queryGpt3 };