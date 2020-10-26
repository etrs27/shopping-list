
function main(){
  $('#js-shopping-list-form').on('submit', function(event) {
    event.preventDefault();
    let currentValue = $('#shopping-list-entry').val()
    $('.shopping-list').append(` <li>
    <span class="shopping-item">${currentValue}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`)
    
  });

  $('ul').on('click', '.shopping-item-toggle',function(event){
    event.preventDefault();
    let currentElement = $(event.currentTarget)
    currentElement.closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
  })



  $('ul').on('click', '.shopping-item-delete', function(event){
    event.preventDefault();
    let currentElement = $(event.currentTarget)
    currentElement.closest('li').remove()
  })
}

$(main);