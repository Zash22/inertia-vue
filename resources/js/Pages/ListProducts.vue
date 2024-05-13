<template>
    <div class="item">
        <input
            type="checkbox"
            @change="markAsComplete()"
            v-model="item.completed"
        />
        <span   :class="[item.completed ? 'completed' : '' , 'itemText']" > {{item.name}} </span>
        <button @click="deleteTask()" class="trashcan">
<!--            <font-awesome-icon icon="trash"/>-->
        </button>
    </div>
</template>
<script>

export default {
    components: {},
    props: ['products'],
    methods: {

    }
}
</script>

<style>
.completed {
    text-decoration: line-through;
    color: red;
}

.itemText {
    width: 100%;
    margin-left: 10px
}
.item {
    display: flex;
    justify-content: center;
    align-items: center;
}
.trashcan {
    background: red;
}
</style>
