<template>
    <div style="margin: 20px;">
        <el-table :data="data" style="width:900px" show-summary border>
            <el-table-column label="姓名" prop="name" :width="200" fixed="left"></el-table-column>
            <el-table-column label="年龄" prop="age" :width="200"></el-table-column>
            <el-table-column label="性别" prop="sex" :width="200"></el-table-column>
            <el-table-column label="民族" prop="nation" :width="200"></el-table-column>
            <el-table-column label="身份证号" prop="idcard" fixed="right" :width="300"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: []
        };
    },
    mounted() {
        setTimeout(() => {
            for (let i = 0; i < 10; i++) {
                this.data.push({
                    name: `姓名${i}`,
                    age: 20,
                    sex: "男",
                    nation: "汉族",
                    idcard: "522128"
                });
            }
        }, 500);
    }
};
</script>
