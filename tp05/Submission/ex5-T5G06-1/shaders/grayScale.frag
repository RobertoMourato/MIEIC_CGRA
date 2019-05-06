#ifdef GL_ES
precision highp float;
#endif

varying vec4 position;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    vec4 grayScaleColor = color;

    grayScaleColor.r = color.r * 0.299 + color.g * 0.587 + color.b * 0.114;
    grayScaleColor.g = color.r * 0.299 + color.g * 0.587 + color.b * 0.114;
    grayScaleColor.b = color.r * 0.299 + color.g * 0.587 + color.b * 0.114;

    gl_FragColor = grayScaleColor;
}