export const home = (req, res) => {
    res.send('Hello World!');
};
export const hb1 = (req, res) => {
    res.render('hb1', { message: 'Olá, você está aprendendo Express + HBS!' });
};
export const hb2 = (req, res) => {
    res.render('hb2', { title: 'Express Framework' });
};
export const hb3 = (req, res) => {
    const professores = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1237 },
        { nome: 'Edenlo Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 }
    ];
    res.render('hb3', { professores });
};
export const hb4 = (req, res) => {
    const technologies = [
        { name: 'Express', type: 'Framework', poweredByNodejs: true },
        { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
        { name: 'React', type: 'Library', poweredByNodejs: true },
        { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
        { name: 'Django', type: 'Framework', poweredByNodejs: false },
        { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
        { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
    ];
    res.render('hb4', { technologies });
};
