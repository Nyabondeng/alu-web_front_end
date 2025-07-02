const user = {
    hobby: "Calligraphy",
    favoriteSport: "Hockey",
    astrologicalSign: "Aries",
    firstName: "Buillaume",
    lastName: "Ialva",
    location: "Telaviv",
    occupation: "Engineer"
};

    const logWelcomeUser = (welcomeString) => {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

var bindLogWelcomeUser = logWelcomeUser.bind(user);

bindLogWelcomeUser('Welcome');
