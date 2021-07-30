<template>
  <div class="config">
    <div class="config-form">
      <el-form ref="formRef" :model="formData" :rules="rules" label-width="100px" style="width:500px">
        <el-form-item label="接口路径：" prop="path">
          <el-input v-model="formData.path"></el-input>
        </el-form-item>
        <el-form-item label="接口名称：" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="请求方法：" prop="method">
          <el-select v-model="formData.method" placeholder="请选择接口请求方法">
            <el-option label="GET" value="get"></el-option>
            <el-option label="POST" value="post"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="模拟数据：" prop="mockData">
          <el-input type="textarea" v-model="formData.mockData" placeholder='{"code":1,"data":[1,2,3]}'></el-input>
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
import { defineComponent, reactive, ref, onMounted } from 'vue'
import { addApi } from '../../api/config'
import { ElMessage } from 'element-plus'
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
      method:[
        { required: true, message: '请输入接口名称', trigger: 'blur' }
      ],
      mockData: [
        { required: true, message: '请输入模拟数据', trigger: 'blur' }
      ]
    }
    const formRef:any = ref(null)
    const formData = reactive({
      path:'',
      name:'',
      method: '',
      mockData: ''
    })
    // const jsonData = reactive({
    //   value:{code:1,data:[1,2]}
    // })

    function submitForm(){
      formRef.value.validate((valid:any) => {
          if (valid) {
            try {
              const info = JSON.parse(formData.mockData);
              if(info){
                addApi({
                  ...formData,
                  mockData:info
                }).then(res => { 
                  console.log(res, 'res--')
                })
              }
            } catch (error) {
              ElMessage.warning(error.toString())
            }
          } else {
            ElMessage.warning('校验未通过,请检查参数')
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

    // onMounted(() => {
    //   console.log('onMounted')
    // })

    return {
      formRef,
      formData,
      rules,
      // jsonData,
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
