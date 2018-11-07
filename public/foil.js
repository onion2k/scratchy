/* global registerPaint */

class FoilPainter {

    static get inputProperties() { return ['--paintlet-history']; }

    paint(ctx, geom, properties) {

        const history = properties.get('--paintlet-history').toString().split(",");

        ctx.fillStyle = 'rgba(0,0,0,0)';
        ctx.beginPath();
        ctx.rect(0, 0, geom.width, geom.height);
        ctx.fill();

        ctx.fillStyle = 'rgba(255,255,255,1)';
        for (let i=0; i< history.length; i+=2) {
            ctx.beginPath();
            ctx.rect(parseInt(history[i]) - 50, parseInt(history[i+1]) - 50, 100, 100);
            ctx.fill();
        };

    }
}

registerPaint('foil', FoilPainter);
