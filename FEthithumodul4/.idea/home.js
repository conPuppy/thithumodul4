function show() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/employees",
        //xử lý khi thành công
        success: function (employees) {
            let str = '';
            for (const employee of employees) {
                str += `<tr>
                            <td>${employee.id}</td>
                            <td data-bs-toggle="modal" data-bs-target="#myModalShow" onclick="showEmployee(${employee.id})">${employee.name}</td>
                            <td>${employee.age}</td>
                            <td>${employee.department.name}</td>
                            <td><button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#myModalEdit" onclick="showEdit(${employee.id})">Edit</button>   
                            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModalDelete" onclick="showDelete(${employee.id})">Delete</button></td>
                        </tr>`
            }
            document.getElementById("show").innerHTML = str;

        },
        error: function (err) {
            console.log(err)
        }
    })
}

show();

function showEmployee(id) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/employees/" + id,
        //xử lý khi thành công
        success: function (employee) {
            console.log(employee)
            let str = `<tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.age}</td>
                <td>${employee.department.name}</td>
               
            </tr>`


            document.getElementById("showDetail").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function createEmployee() {
    let employee = {
        "name": $("#name").val(),
        "age": $("#age").val(),
        "department": {
            "id": $("#idDepartment").val(),
        }
    }

    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/employees",
        // chuyển data thành string
        data: JSON.stringify(employee),
        //xử lý khi thành công
        success: function (data) {
            alert("Thêm mới nhân viên thành công");
            show();
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function showEdit(id) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/employees/" + id,
        //xử lý khi thành công
        success: function (employee) {
            // document.getElementById("idEdit").value = employee.id;
            $("#idEdit").val(employee.id),
                $("#nameEdit").val(employee.name),
                $("#ageEdit").val(employee.age),
                $("#idDepartmentEdit").val(employee.department.id)
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function edit(id) {
    let employee = {
        "id": $("#idEdit").val(),
        "name": $("#nameEdit").val(),
        "age": $("#ageEdit").val(),
        "department": {
            "id": $("#idDepartmentEdit").val(),
        }
    }
    $.ajax({
        type: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/employees/" + id,
        data: JSON.stringify(employee),
        //xử lý khi thành công
        success: function (data) {
            alert("Edit thành công");
            show();
        },
        error: function (err) {
            console.log(err);
        }
    })
}
function showDelete(id) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/employees/" + id,
        //xử lý khi thành công
        success: function (employee) {
            // document.getElementById("idEdit").value = employee.id;
            $("#idDelete").val(employee.id),
                $("#nameDelete").val(employee.name),
                $("#ageDelete").val(employee.age),
                $("#idDepartmentDelete").val(employee.department.id)
            let str =`<button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="deleteEmployee(${employee.id})">Delete</button>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Back</button>`
            document.getElementById("bach").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })

}

function deleteEmployee(id) {
    $.ajax({
        type: "DELETE",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/employees/" + id,
        //xử lý khi thành công
        success: function (employee) {
            alert("Xoa nhan vien thanh cong!")
            show();
        },
        error: function (err) {
            console.log(err);
        }
    })
}