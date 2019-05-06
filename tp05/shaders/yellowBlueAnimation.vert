uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform float normScale;
uniform float timeFactor;

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

varying vec4 position;
varying vec2 vTextureCoord;

void main() {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + vec3(sin(timeFactor) * 5.0, 0, 0), 1.0);
    position = gl_Position;

    vTextureCoord = aTextureCoord;
}