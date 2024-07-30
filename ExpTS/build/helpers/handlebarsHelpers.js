import Handlebars from 'handlebars';
export const registerHelpers = () => {
    Handlebars.registerHelper('filterByNodeJS', (technologies) => {
        const filteredTechs = technologies.filter((tech) => tech.poweredByNodejs);
        return filteredTechs.map((tech) => `${tech.name} - ${tech.type}`).join('<br>');
    });
};
