cc.Class({
  extends: cc.Component,
  properties: {
    col: 10,
    row: 10,
    truePi: 10,
    block: {
      type: cc.Prefab,
      default: null,
    }
  },
  onLoad() {
    let width = this.col * this.truePi;
    let height = this.row * this.truePi;
    this.graphicsNode = new cc.Node();
    this.graphics = this.graphicsNode.addComponent(cc.Graphics);
    this.node.addChild(this.graphicsNode, 100);
    for (let i = 0; i <= this.row; i++) {
        this.graphics.moveTo(0, i * this.truePi);
        this.graphics.lineTo(width, i * this.truePi);
    }
    for (let i = 0; i < this.col + 1; i++) {
        this.graphics.moveTo(i * this.truePi, 0);
        this.graphics.lineTo(i * this.truePi, height);
    }
    let color = cc.Color.WHITE;
    this.graphics.strokeColor = color.fromHEX('#ff0000') 
    this.graphics.stroke();
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col / 2; j++) {
        let bl = cc.instantiate(this.block);
        bl.setPosition(i * this.truePi, j * this.truePi);
        this.node.addChild(bl);

      }
    }
  }
})