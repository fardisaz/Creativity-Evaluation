<template>
  <!-- <base-dialog v-if="isNovel" title="hello"> </base-dialog> -->
  <div style="" ref="draggableContainer" id="draggable-container">
    <base-dialog v-if="isNovel && isOpen" :title="title">
      <template #default>
        <div class="questions">
          <span>What is the limitation of other ideas?</span>
          <p style="white-space: pre-line;">{{ message }}</p>
          <br />
          <textarea
            v-model="message"
            placeholder="add multiple lines"
          ></textarea>
        </div>

        <div class="questions">
          <span>What are the ideas that included in this idea?</span>
          <p style="white-space: pre-line;">{{ message }}</p>
          <br />
          <textarea
            v-model="message"
            placeholder="add multiple lines"
          ></textarea>
        </div>

        <div class="questions">
          <span>What is radically new about this idea?</span>
          <p style="white-space: pre-line;">{{ message }}</p>
          <br />
          <textarea
            v-model="message"
            placeholder="add multiple lines"
          ></textarea>
        </div>
      </template>
      <template #actions>
        <button @click="closeDialog">Okay</button>
      </template>
    </base-dialog>
    <div
      id="draggable-header"
      @mousedown="dragMouseDown"
      @dblclick="$emit('openDialog', title, description)"
    >
      <p>
        {{ title }} - top: {{ positions.clientY }} -left:{{ positions.clientX }}
      </p>
    </div>
  </div>

  <!-- @dblclick="$emit('openDialog')" -->
</template>

<script>
import BaseDialog from "./BaseDialog.vue";
export default {
  components: { BaseDialog },
  name: "Draggable",
  props: ["title", "left", "top", "id", "description"],
  data: function() {
    return {
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0,
      },
      isOpen: true,
    };
  },
  computed: {
    isNovel() {
      this.isOpen = true;
      if (
        (this.positions.clientX < 495 && 130 < this.positions.clientY < 295) ||
        (this.positions.clientX < 360 && 140 < this.positions.clientY < 354)
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    dragMouseDown: function(event) {
      event.preventDefault();
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      document.onmousemove = this.elementDrag;
      document.onmouseup = this.closeDragElement;
    },
    elementDrag: function(event) {
      event.preventDefault();
      this.positions.movementX = this.positions.clientX - event.clientX;
      this.positions.movementY = this.positions.clientY - event.clientY;
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      // set the element's new position:
      this.$refs.draggableContainer.style.top =
        this.$refs.draggableContainer.offsetTop -
        this.positions.movementY +
        "px";
      this.$refs.draggableContainer.style.left =
        this.$refs.draggableContainer.offsetLeft -
        this.positions.movementX +
        "px";
    },
    closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    },
    calcPosOfBox() {
      const boxABB = this.$refs["draggableContainer"].getBoundingClientRect();
      this.$refs["draggableContainer"].style.left = this.left + "px";
      this.$refs["draggableContainer"].style.top = this.top + "px";
      // d.style.left = 50 + "px";
      // d.style.top = 50 + "px";
      console.log(boxABB);
    },
    closeDialog() {
      // this.isNovel = false;
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    this.calcPosOfBox();
  },
};
</script>

<style scoped>
.questions {
  display: flex;
}
#draggable-container {
  /* top: 100px;
  left: 150px; */
  position: absolute;
  z-index: 9;
}

#draggable-header {
  z-index: 10;
}
</style>
