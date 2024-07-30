import Handlebars from 'handlebars';

export const registerHelpers = () => {
    Handlebars.registerHelper('filterByNodeJS', (technologies) => {
        const filteredTechs = technologies.filter((tech: any) => tech.poweredByNodejs);
        return filteredTechs.map((tech: any) => `${tech.name} - ${tech.type}`).join('<br>');
    });
};
