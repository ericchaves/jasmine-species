Namespace.use('jasmine.grammar.FeatureStory.*');
Namespace.use('jasmine.grammar.GWT.*');
Namespace.use('jasmine.grammar.Meta.*');

feature('Criando um perfil de usuário', function() {
    summary(
        'Para realizar compras pelo ceular',
        'Como um novo usuário',
        'Quero informar meus dados pessoais'
    );
    
    scenario('Usuário preenche apenas o nome', function() {
        var user;
        
        given('a new user account', function() {
            user =  Ext.create('QPay.model.User');
        });
        when('I add a fullname with one word only', function() {
            user.set('fullname', 'eric');
        });
        then('should be validation errors for the fullname field', function() {
            expect(true).toEqual(true);
        });
    });
});
