import { LoremIpsum } from 'lorem-ipsum';
export const getLorem = (req, res) => {
    const paragraphs = parseInt(req.params.num, 10);
    if (isNaN(paragraphs) || paragraphs <= 0) {
        return res.status(400).send('Número inválido de parágrafos');
    }
    const lorem = new LoremIpsum();
    const loremText = lorem.generateParagraphs(paragraphs);
    res.send(loremText);
};
