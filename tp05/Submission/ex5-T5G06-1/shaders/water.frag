#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D waterTex;
uniform float timeFactor;

void main() {
	vec4 color = texture2D(waterTex, vTextureCoord +vec2(timeFactor*.00114,timeFactor * 0.027));
	gl_FragColor = color;
}