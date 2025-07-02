var globalVariable = 'Welcome';
const outer = () => {
    alert(globalVariable);

    var course = 'Holberton';
    const inner = () => {
        alert(globalVariable + " " + course);

        var exclamation = '!';
        const inception = () => {
            alert(globalVariable + " " + course + exclamation);
        }
        inception();
    }
    inner();
}
outer();
