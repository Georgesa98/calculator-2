if (equation.eq === "="){
    if(equation.eq !== ""){
        var ans = "";
        try {
            ans = eval(equation.eq);
        }

        catch (err) {
            setEquation({res: "Math Error"});
        }
        if (ans === undefined) {
            setEquation({res: "Math Error"});
        }
        else {
            setEquation({res: ans, eq: equation})
        }
        }
        }