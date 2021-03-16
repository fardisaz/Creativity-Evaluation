<template>
  <div>
    <div v-for="idea in ideas" :key="idea.id">
      <draggable
        class="testmove"
        :id="idea.id"
        :title="idea.title"
        :description="idea.description"
        :left="idea.position.left"
        :top="idea.position.top"
        @openDialog="toggleClick"
        @posCalc="positionCalculation"
      >
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
    <base-dialog v-if="novelDialog" :title="novelTitle">
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
        <button @click="closeNovel">Okay</button>
      </template>
    </base-dialog>

    <base-dialog v-if="antiNovelDialog" :title="antiNovelTitle">
      <template #default>
        <div class="questions">
          <span>What is the limitation of this idea?</span>
          <p style="white-space: pre-line;">{{ message }}</p>
          <br />
          <textarea
            v-model="message"
            placeholder="add multiple lines"
          ></textarea>
        </div>

        <!-- <div class="questions">
          <span>What is radically new about this idea?</span>
          <p style="white-space: pre-line;">{{ message }}</p>
          <br />
          <textarea
            v-model="message"
            placeholder="add multiple lines"
          ></textarea>
        </div> -->
      </template>
      <template #actions>
        <button @click="closeAntiNovel">Okay</button>
      </template>
    </base-dialog>
  </div>
</template>

<script>
import Draggable from "./Draggable.vue";
// import ideas from "../../db.json";
import BaseDialog from "./BaseDialog.vue";
import { mapState } from "vuex";
export default {
  components: {
    Draggable,
    BaseDialog,
  },
  data() {
    return {
      //ideas: [],
      clicked: false,
      currentTitle: null,
      currentDescription: null,
      ideaItem: {},
      novelDialog: false,
      novelTitle: null,
      antiNovelDialog: false,
      antiNovelTitle: null,
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
    closeNovel() {
      this.novelDialog = false;
    },
    closeAntiNovel() {
      this.antiNovelDialog = false;
    },
    positionCalculation(x, y, id, title) {
      //console.log("here is the calculation", x, y, id);
      const index = this.ideas.findIndex((idea) => idea.id === id);
      const newIdea = {
        ...this.ideas[index],
        position: {
          left: x,
          top: y,
        },
      };
      //console.log(newIdea);
      this.$store.dispatch("changeIdeas", newIdea);
      //this.$store.dispatch("fetchIdeas");
      //console.log(this.$store.state.ideas);

      if ((x < 495 && 130 < y < 295) || (x < 360 && 140 < y < 354)) {
        this.novelDialog = true;
        this.novelTitle = title;
      } else if ((1004 < x < 1411 && y > 600) || (598 < y < 799 && x > 1000)) {
        this.antiNovelDialog = true;
        this.antiNovelTitle = title;
      }
    },
  },
  created() {
    //fetching the idea from json server
    this.$store.dispatch("fetchIdeas");
  },
  computed: mapState(["ideas"]),
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
