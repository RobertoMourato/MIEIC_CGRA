attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
varying vec2 vTextureCoord;
uniform sampler2D waterMap;
uniform float timeFactor;

void main() {
	vec4 color = texture2D(waterMap, aTextureCoord + vec2(timeFactor*.00114,timeFactor * 0.027));
	float v = 0.07 * ((color.g + color.r + color.b)/3.0 - 0.5);
	float z = 0.02 * sin( 2.0*( 0.01*timeFactor + aTextureCoord[0] + aTextureCoord[1]));
	vec3 offset = vec3(0 , 0 , v + z);
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
	vTextureCoord = aTextureCoord;
}

