<template>
  <div class="config">
    <div class="config-form">
      <el-form ref="formRef" :model="formData" :rules="rules" label-width="100px">
        <el-form-item label="接口路径：" prop="path">
          <el-input v-model="formData.path"></el-input>
        </el-form-item>
        <el-form-item label="接口名称：" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="请求方法：" prop="methods">
          <el-select v-model="formData.methods" placeholder="请选择接口请求方法">
            <el-option label="GET" value="get"></el-option>
            <el-option label="POST" value="post"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="接口描述：" prop="description">
          <el-input type="textarea" v-model="formData.description"  maxlength="50" show-word-limit></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">立即创建</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <!-- <JsonEditorVue v-bind="jsonData"/> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'


export default defineComponent({
  components:{
  },
  setup() {
    const rules = {
      path: [
        { required: true, message: '请输入接口路径', trigger: 'blur' }
      ],
      name:[
        { required: true, message: '请输入接口名称', trigger: 'blur' }
      ],
      methods:[
        { required: true, message: '请输入接口名称', trigger: 'blur' }
      ]
    }
    const formRef:any = ref(null)
    const formData = reactive({
      path:'',
      name:'',
      methods: '',
      description:''
    })
    const jsonData = reactive({
      value:{code:1,data:[1,2]}
    })

    function submitForm(){
      formRef.value.validate((valid:any) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }

    function resetForm(){
      formRef.value.resetFields();
    }

    function onJsonChange(value:any) {
    console.log('value:', value);
    }
    function onJsonSave(value:any) {
      console.log('value:', value);
    }

    return {
      formRef,
      formData,
      rules,
      jsonData,
      submitForm,
      resetForm,
      onJsonChange,
      onJsonSave
    }
  },
})
</script>

<style lang="scss" scoped>
.config{
  .config-form{
    padding: 20px;
    width: 30%;
  }
}
</style>
