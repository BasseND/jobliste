<template>
  <div class="post_job_form">

    <el-form
      :model="jobForm"
      :rules="rules"
      ref="jobForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="Title"
        prop="title"
      >
        <el-input v-model="jobForm.title"></el-input>
      </el-form-item>
      <el-form-item
        label="Image Url"
        prop="imageUrl"
      >
        <el-input v-model="jobForm.imageUrl"></el-input>
      </el-form-item>

      <el-form-item
        label="Company"
        prop="company"
      >
        <el-input v-model="jobForm.company"></el-input>
      </el-form-item>
      <el-form-item
        label="Location"
        prop="location"
      >
        <el-input v-model="jobForm.location"></el-input>
      </el-form-item>

      <el-form-item
        label="Salary"
        prop="salary"
      >
        <el-select
          v-model="jobForm.salary"
          placeholder="Select"
        >
          <el-option
            v-for="item in salaryAmount"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="Type contrat"
        prop="contractType"
      >
        <el-radio-group v-model="jobForm.contractType">
          <el-radio
            value="CDI"
            label="CDI"
          ></el-radio>
          <el-radio
            value="CDD"
            label="CDD"
          ></el-radio>
          <el-radio
            value="STAGE"
            label="STAGE"
          ></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item
        label="Skills"
        prop="skills"
      >
        <el-select
          v-model="jobForm.skills"
          multiple
          placeholder="Select"
        >
          <el-option
            v-for="item in skills"
            :key="item.label"
            :label="item.label"
            :value="item.label"
          >
          </el-option>
        </el-select>

      </el-form-item>

      <el-form-item
        label="Published ?"
        prop="delivery"
      >
        <el-switch v-model="jobForm.isPublished"></el-switch>
      </el-form-item>

      <el-form-item
        label="Description"
        prop="description"
      >
        <el-input
          type="textarea"
          v-model="jobForm.description"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="addJob()"
        >Create</el-button>
        <el-button @click="resetForm('jobForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      jobForm: {
        title: "",
        imageUrl: "",
        company: "",
        salary: "",
        contractType: "",
        skills: [],
        location: "",
        description: "",
        isPublished: false
      },
      rules: {
        title: [
          {
            required: true,
            message: "Please put the title",
            trigger: "blur"
          }
        ],
        imageUrl: [
          {
            required: true,
            message: "Please put the title",
            trigger: "blur"
          }
        ],
        company: [
          {
            required: true,
            message: "Please put the Company name",
            trigger: "blur"
          }
        ],
        salary: [
          {
            required: true,
            message: "Please select the salary",
            trigger: "change"
          }
        ],
        contractType: [
          {
            required: true,
            message: "Please select the contract type",
            trigger: "change"
          }
        ],
        skills: [
          {
            required: true,
            message: "Please select skills",
            trigger: "change"
          }
        ],
        location: [
          {
            required: true,
            message: "Please put the location",
            trigger: "blur"
          }
        ],
        description: [
          {
            required: true,
            message: "Please put the job description",
            trigger: "blur"
          }
        ]
      },
      salaryAmount: [
        {
          value: "Option1",
          label: "70 000 - 120 000"
        },
        {
          value: "Option2",
          label: "70 000 - 120 000"
        },
        {
          value: "Option3",
          label: "70 000 - 120 000"
        },
        {
          value: "Option4",
          label: "70 000 - 120 000"
        },
        {
          value: "Option5",
          label: "70 000 - 120 000 "
        }
      ],

      skills: [
        {
          value: "Option1",
          label: "Java "
        },
        {
          value: "Option2",
          label: "Javascript "
        },
        {
          value: "Option3",
          label: "Vue js "
        },
        {
          value: "Option4",
          label: "React js "
        },
        {
          value: "Option5",
          label: "Angular "
        }
      ],

      value11: []
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isPNG = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isPNG) {
        this.$message.error("L'avatar doit être en JPG !");
      }
      if (!isLt2M) {
        this.$message.error("L'avatar ne peut pas excéder 2Mb !");
      }
      return isPNG && isLt2M;
    },

    async addJob(e) {
      await this.$store.dispatch("jobs/ADD_JOB", {
        title: this.jobForm.title,
        imageUrl: this.jobForm.imageUrl,
        company: this.jobForm.company,
        salary: this.jobForm.salary,
        contractType: this.jobForm.contractType,
        skills: this.jobForm.skills,
        location: this.jobForm.location,
        description: this.jobForm.description,
        isPublished: this.jobForm.isPublished
      });
    }
  }
};
</script>

<style <style lang="scss">
.post_job_form {
  max-width: 1000px;
  min-width: 800px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  padding: 30px;
  margin: 40px auto;
  text-align: left;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  background-color: #fbfdff;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

