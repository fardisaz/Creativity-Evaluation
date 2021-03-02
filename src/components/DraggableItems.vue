<template>
  <div>
    <div v-for="idea in ideas" :key="idea.id">
      <draggable
        :id="idea.id"
        :title="idea.title"
        :description="idea.description"
        :left="idea.position.left"
        :top="idea.position.top"
        class="testmove"
        @openDialog="toggleClick"
      >
        <!-- <base-dialog v-if="isNovel" title="hello"> </base-dialog> -->
      </draggable>
    </div>
    <base-dialog v-if="clicked" :title="currentTitle">
      <template #default>
        <p>{{ currentDescription }}</p>
      </template>
      <template #actions>
        <button @click="closeDialog">Okay</button>
      </template>
    </base-dialog>
  </div>
</template>

<script>
import Draggable from "./Draggable.vue";
import ideas from "../../db.json";
import BaseDialog from "./BaseDialog.vue";
export default {
  components: {
    Draggable,
    BaseDialog,
  },
  data() {
    return {
      ideas,
      clicked: false,
      currentTitle: null,
      currentDescription: null,

      arr: [
        { header: "idea 1", top: 412, left: 150 },
        { header: "idea 2", top: 447, left: 150 },
        { header: "idea 3", top: 463, left: 50 },
      ],
    };
  },
  methods: {
    toggleClick(_title, _desc) {
      this.currentTitle = _title;
      this.currentDescription = _desc;
      this.clicked = true;
    },
    closeDialog() {
      this.clicked = false;
    },
  },
  computed: {
    // isNovel() {
    //   if (this.positions.clientX < 495 && 130 < this.positions.clientY < 295) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
  },
};
</script>

<style>
.testmove {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: block; */
  position: absolute;
  top: 0;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: #b9829e;
  color: #f5c9e0;
  text-align: center;
  /* justify-content: center; */
}
</style>
