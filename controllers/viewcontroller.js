

exports.getAddQuestion = (req , res ,next) => {
    res.render('question/questionType', {
        pageTitle: 'Post A question',
        path: '/add',
        editing: false
    });
};

exports.postQuestion = (req , res , next) => {
    // console.log(req.body.type);
    const type = req.body.type;
    if(type === 'Descriptive'){
        res.render('question/questionA', {
            pageTitle: 'Post A question',
            path: '/add',
            editing: false
        });
    }
    else{
        res.render('question/questionB', {
            pageTitle: 'Post A question',
            path: '/add',
            editing: false
        });
    }

}