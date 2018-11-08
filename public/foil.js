/* global registerPaint */

registerPaint('foil', class FoilPainter {

    static get inputProperties() { return ['--paintlet-history']; }

    paint(ctx, geom, properties) {

        const history = properties.get('--paintlet-history').toString().split(",");

        ctx.fillStyle = 'rgba(255,255,255,1)';

        for (let i=0; i< history.length; i+=2) {
            ctx.beginPath();
            ctx.arc(parseInt(history[i]), parseInt(history[i+1]), 50, 0, Math.PI * 2);
            ctx.fill();
        };

    }
});
