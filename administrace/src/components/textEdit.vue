<template>
    <ckeditor
        v-if="editor"
        v-model="localEditorData"
        :editor="editor"
        :config="config"
        @input="updateValue"
    />
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { Ckeditor, useCKEditorCloud  } from '@ckeditor/ckeditor5-vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const cloud = useCKEditorCloud( {
    version: '44.0.0',
    premium: false
} );

const localEditorData = ref(props.modelValue);
watch(() => props.modelValue, (newValue) => {
    localEditorData.value = newValue;
});

const updateValue = (data) => {
    emit('update:modelValue', localEditorData.value);
};
const editor = computed( () => {
    if ( !cloud.data.value ) {
        return null;
    }

    return cloud.data.value.CKEditor.ClassicEditor;
} );

const config = computed( () => {
        if ( !cloud.data.value ) {
        return null;
    }

    const { Essentials, Paragraph, Bold, Italic } = cloud.data.value.CKEditor;

    return {
        licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NjU2NzAzOTksImp0aSI6ImFjNjBkYWRjLTMzZWUtNDJmYy1hNDg2LTQ5Yzc0Y2ZiNjEzZSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkJPWCJdLCJ2YyI6ImZlYjYzMjJiIn0.yQZJkHb2mtXjt4h7u2f4YeEWMxlMcy2heH7NV18Plnu45IVELGpIPC9eUlB7vnEnvQmApo1RFqqVb7cAcdxDVw',
        plugins: [ Essentials, Paragraph, Bold, Italic, ],
        toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|',]
    };
} );
</script>
