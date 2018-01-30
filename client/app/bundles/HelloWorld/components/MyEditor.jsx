import React, { Component } from 'react';
// eslint-disable-next-line import/no-unresolved

export default class CustomImageEditor extends Component {

  onChange(){
    alert(4)
        var formData = new FormData($('#data')[0]);

    console.log('xxxxxxxxxxxxx',formData)
    $.ajax({
        url: '/posts',
        type: 'POST',
        data: formData,
        beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},
        async: false,
        success: function (data) {
            alert(data)
        },
        cache: false,
        contentType: false,
        processData: false
    });

    return false;

  }

  render() {
    return (
      <div>
        <div>
<form id="data" method="post" enctype="multipart/form-data">
    <input type="text" name="title" value="Bob" />
     <input type="text" name="body" value="Smith" />
    <input name="avatar" type="file" />
    <button onClick={this.onChange.bind(this)}>Submit</button>
</form>

         </div>
      </div>
    );
  }
}