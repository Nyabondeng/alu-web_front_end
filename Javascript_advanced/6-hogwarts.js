var studentHogwarts = (function() {
    var privateScore = 0;
    var name = null;

    const changeScoreBy = (points) => {
        privateScore += points;
    }

    return {
        setName: function(newName) {
            name = newName;
        },
        rewardStudent: function() {
            changeScoreBy(1);
        },
        penalizeStudent: function() {
            changeScoreBy(-1);
        },
        getScore: function() {
            return `${name}: ${privateScore}`;
        }
    };
})();

var harry = Object.create(studentHogwarts);
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore()); 

var draco = Object.create(studentHogwarts);
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore()); 
