// すでに会議に参加しているかどうか
const isJoined = () =>
  document.getElementsByTagName("body")[0].innerText.indexOf("call_end") > 0;

// レコードをするべきかどうか
const needsRecording = () =>
  document.getElementsByTagName("body")[0].innerText.indexOf("[rec]") > 0 ||
  document.getElementsByTagName("body")[0].innerText.indexOf("[撮影]") > 0 ||
  document.getElementsByTagName("body")[0].innerText.indexOf("[録画]") > 0;

let isJoinedBefore = false;

const onJoined = () => {
  // 撮影する必要がない場合はアラートを出さない
  if (!needsRecording()) return true;

  alert("撮影忘れないでね！");
  return false;
};

// 入室済みかどうかを確認し、入室したらonJoinedを発火
const checkJoined = () => {
  const isJoinedNow = isJoined();
  // 入室したかどうかが変わった場合、onJoinedを発火し、trueが返ってきたらそれ以降は発火しない
  if (isJoinedNow && !isJoinedBefore) if (onJoined()) return;

  isJoinedBefore = isJoinedNow;
};

window.addEventListener("load", function () {
  setInterval(checkJoined, 100);
});
