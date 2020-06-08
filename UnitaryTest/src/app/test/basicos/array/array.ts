export function getRobots(){
    return [ "Robocop", "R2D2", "Terminator", "Megazord" ];
}

export function getRobotByName( name: string ){

    let robots = [ "Robocop", "R2D2", "Terminator", "Megazord" ];

    let robotEncontrado = robots.find( robot => robot.toLowerCase() == name.toLowerCase());
    
    if(robotEncontrado)
        return true;
    else
        return false;
}

export function addRobot( name: string ){
    let robots = [ "Robocop", "R2D2", "Terminator", "Megazord" ];

    robots.push(name);

    return robots;
}

export function deleteRobot( name: string ){
    let robots = [ "Robocop", "R2D2", "Terminator", "Megazord" ];

    return robots.filter( robot => robot != name );
}