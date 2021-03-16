<template>
  <div>
    <header>Novelty Evaluation</header>
    <!-- <button @click="saveIdeas">Save evaluation</button> -->
    <!-- Component to export JSON file -->
    <download
      :download-data="$store.state.ideas"
      file-type="json"
      file-name="Ideas"
      class="periodic_table color-3"
      button-text="Save Evaluation"
    >
    </download>
    <div class="novel">
      <h3>Novel Ideas</h3>
    </div>
    <div class="notNovel">
      <h3>Not Novel Ideas</h3>
    </div>

    <draggable-items></draggable-items>
  </div>
</template>

<script>
import Download from "./Download.vue";
import DraggableItems from "./DraggableItems.vue";

export default {
  components: { DraggableItems, Download },
  data() {
    return {
      isDescriptionOpened: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
header {
  padding: 20px;
  justify-content: center;
  border-bottom: solid;
  border-color: #725e88;
  text-align: center;
  size: 30px;
  margin-bottom: 5px;

  background: rgb(187, 165, 196);
  color: #725e88;
  font-size: 30px;
}
.novel {
  display: flex;
  color: rgb(234, 206, 245);
  justify-content: center;
  align-items: flex-start;
  height: 230px;
  width: 450px;
  background-color: #725e88;
  border-radius: 60%;
}
.notNovel {
  position: absolute;
  color: rgb(234, 206, 245);
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 230px;
  width: 450px;
  background-color: #725e88;
  border-radius: 60%;
}

.periodic_table {
  color: #fff !important;
  font-weight: bold;
  font-size: 15px;
  flex: 1;
  width: 10rem;
}
.periodic_table.color-3 {
  background: rgb(167, 148, 179);
}
</style>
