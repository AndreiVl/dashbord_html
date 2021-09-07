$(document).ready(function () {
	// Initialize the plugin
	const chat_user_list = document.querySelector('.chat__user-list');
	// const ps = new PerfectScrollbar(chat_user_list);
	if ($('.chat__user-list').length) {
		const ps = new PerfectScrollbar(chat_user_list, {
			wheelPropagation: false,
			wheelSpeed: 1,
			maxScrollbarLength: 100
		});
	}

	const chat_msg_list = document.querySelector('.chat__msg-list');
	if ($('.chat__msg-list').length) {
		const psm = new PerfectScrollbar(chat_msg_list, {
			wheelPropagation: false,
			wheelSpeed: 1,
			maxScrollbarLength: 100
		});
	}
});