function translation(vector){
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        vector[0], vector[1], vector[2], 1
        
    ]
}