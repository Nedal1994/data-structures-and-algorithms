let trackStack = [];

    function push(x)
    {
        mainStack.push(x);
        if (mainStack.length == 1)
        {
            trackStack.push(x);
            return;
        }


        if (x > trackStack[trackStack.length - 1])
            trackStack.push(x);
        else
            trackStack.push(trackStack[trackStack.length - 1]);
    }

    function getMax()
    {
        return trackStack[trackStack.length - 1];
    }

    function pop()
    {
        mainStack.pop();
        trackStack.pop();
    }

    push(20);
    console.log(getMax());
    push(10);
    console.log(getMax());
    push(50);
    console.log(getMax());