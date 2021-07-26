module.exports = {
    name: 'gay',
    aliases: [],
    category: 'Troll',
    utilisation: '{prefix}gay',

    execute(client, message) {
        const user = message.mentions.users.first();

        console.log(user);

        const pourcentage = Math.floor(Math.random()*100);

        message.channel.send(client.emotes.gay + " <@" + user.id + "> est gay à : " + pourcentage + "% " + client.emotes.gay);
    },
};