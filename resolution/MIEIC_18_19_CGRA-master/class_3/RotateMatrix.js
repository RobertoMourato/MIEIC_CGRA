function rotate_Z(ang){
    var radian  = ang * Math.PI/180;

    m = [
        Math.cos(radian), Math.sin(radian), 0, 0,
        -Math.sin(radian), Math.cos(radian), 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];
    return m;
}

function rotate_X(ang){
    var radian  = ang * Math.PI/180;

    m = [
        1, 0, 0, 0,
        0, Math.cos(radian), Math.sin(radian), 0,
        0, -Math.sin(radian), Math.cos(radian), 0,
        0, 0, 0, 1
    ];
    return m;
}


function rotate_Y(ang){
    var radian  = ang * Math.PI/180;

    m = [
        Math.cos(radian), 0, -Math.sin(radian), 0,
        0, 1, 0, 0,
        Math.sin(radian), 0, Math.cos(radian), 0,
        0, 0, 0, 1
    ];
    return m;
}
