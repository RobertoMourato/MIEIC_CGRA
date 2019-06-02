attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;

varying vec4 aux;

void main() {
	vTextureCoord = aTextureCoord;
	vec3 aux1 = vec3(0.0, 0.0, texture2D(uSampler2, vec2(0.0,0.0)+vTextureCoord).r);
	aux = vec4(aVertexPosition+aux1, 1.0);
	gl_Position = uPMatrix*uMVMatrix*vec4(aVertexPosition+aux1,1.0);
}