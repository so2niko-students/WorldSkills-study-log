const preferences = {
    time : 200,
    step : 10,
    snake : document.querySelector('.snake'),
    score : document.querySelector('.score'),
    codes : {
        KeyA : 'left',
        KeyS : 'down',
        KeyD : 'right',
        KeyW : 'up',
    },
    position : {
        left : [50, window.innerWidth - 50],
        top : [50, window.innerHeight - 50]
    },
    radius : {
        food : 10,
        snake : 20
    }
};

const game = {
    score : 0,
    move : {
        left : {
            left : -preferences.step,
            top : 0
        },
        right : {
            left : preferences.step,
            top : 0
        },
        up : {
            left : 0,
            top : -preferences.step
        },
        down : {
            left : 0,
            top : preferences.step
        }
    },
    position : {
        left : 0,
        top : 0
    },
    food : {
        left: 0,
        top : 0
    },
    direction : 'right',
}

const tick = () => {
    const { left, top } = game.move[game.direction];
    game.position.left += left;
    game.position.top += top;
    preferences.snake.style.left = `${ game.position.left }px`;
    preferences.snake.style.top = `${ game.position.top }px`;
    if(isTouch()){
        eatFood();
    }
    preferences.score.innerText = game.score;
}

const generateRandom = ([from, to]) => {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

const isTouch = () => {
    const minDistance = (preferences.radius.snake + preferences.radius.food) * 1.1;
    const x1 = game.position.left + preferences.radius.snake;
    const x2 = game.food.left + preferences.radius.food;
    const y1 = game.position.top + preferences.radius.snake;
    const y2 = game.food.top + preferences.radius.snake;
    const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    return distance <= minDistance;
}

const eatFood = () => {
    document.body.removeChild(game.food.link);
    generateFood();
    game.score += 1;
}

const generateFood = () => {
    game.food.left = generateRandom(preferences.position.left);
    game.food.top = generateRandom(preferences.position.top);

    const food = document.createElement('div');
    food.classList.add('food');
    food.style.left = `${ game.food.left }px`;
    food.style.top = `${ game.food.top }px`;

    game.food.link = food;

    document.body.appendChild(food);
}

document.body.addEventListener('keypress', (ev) => {
    console.log(ev);
    game.direction = preferences.codes[ev.code] || game.direction;
});

setInterval(tick, preferences.time);
generateFood();