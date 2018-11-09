/* global registerPaint */

registerPaint('foil', class FoilPainter {

    static get inputProperties() { return ['--paintlet-history', '--font-bitmap']; }

    paint(ctx, geom, properties) {

        let map = [];
        let x, y;
        for (let i=0; i<26; i++) {
            x = (i%9) * 32;
            y = Math.floor(i/9) * 32;
            map[65+i] = [x,y];
        }
  
        for (let i=0; i<10; i++) {
            x = ((i+26)%9) * 32;
            y = Math.floor((i+26)/9) * 32;
            map[48+i] = [x,y];
        }

        const font = properties.get('--font-bitmap');

        if (font.state==='ready') {
            let text = "Scratchy";
            for (let c=0; c<text.length; c++) {
                let l = text.charCodeAt(c);
                if (l===32) { continue; }
                ctx.drawImage(font, map[l][0],map[l][1], 32,32, c*32,0, 32,32);
            }    
        }
        const history = properties.get('--paintlet-history').toString().split(",");

        ctx.fillStyle = 'rgba(255,255,255,1)';

        for (let i=0; i< history.length; i+=2) {
            ctx.beginPath();
            ctx.arc(parseInt(history[i]), parseInt(history[i+1]), 50, 0, Math.PI * 2);
            ctx.fill();
        };

    }
});
