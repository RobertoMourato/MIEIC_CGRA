#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler1;
uniform sampler2D uSampler3;

varying vec4 aux;

void main() {
	vec4 color = texture2D(uSampler1,vTextureCoord);
	vec4 aux2 = texture2D(uSampler3,vec2(0.1, 1.0-aux.z));
	gl_FragColor = color*0.55+aux2*0.45;
}