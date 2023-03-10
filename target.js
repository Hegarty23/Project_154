AFRAME.registerComponent("target-ring", {
    init: function(){
        for (var i=1; i<=20; i+=1){
            var id=`ring${i}`
            var posX=(Math.random()*3000+(-1000))
            var posY=(Math.random()*2+(-1))
            var posZ=(Math.random()*3000+(-1000))
            var position={x:posX, y:posY, z:posZ}
            this.createRings(id, position)
        }
    },
    createRings: function(id, position){
        var terrainEl=document.querySelector("#terrain")
        var ringsEl=document.createElement("a-entity")
        ringsEl.setAttribute("id", id)
        ringsEl.setAttribute("position", position)
        ringsEl.setAttribute("material", "color", "yellow")
        ringsEl.setAttribute("geometry", {primitive:"torus", radius:8})
        terrainEl.appendChild(ringsEl)
    }
})