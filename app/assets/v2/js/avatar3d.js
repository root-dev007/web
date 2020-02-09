var ethdenver_abi = [
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "string", name: "" }],
    name: "name",
    inputs: [],
    constant: true
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [{ type: "bool", name: "" }],
    name: "approve",
    inputs: [
      { type: "address", name: "spender" },
      { type: "uint256", name: "value" }
    ],
    constant: false
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "uint256", name: "" }],
    name: "totalSupply",
    inputs: [],
    constant: true
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [{ type: "bool", name: "" }],
    name: "transferFrom",
    inputs: [
      { type: "address", name: "from" },
      { type: "address", name: "to" },
      { type: "uint256", name: "value" }
    ],
    constant: false
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [{ type: "bool", name: "" }],
    name: "transferWithData",
    inputs: [
      { type: "address", name: "to" },
      { type: "uint256", name: "value" },
      { type: "bytes", name: "data" }
    ],
    constant: false
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "uint8", name: "" }],
    name: "decimals",
    inputs: [],
    constant: true
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [{ type: "bool", name: "" }],
    name: "increaseAllowance",
    inputs: [
      { type: "address", name: "spender" },
      { type: "uint256", name: "addedValue" }
    ],
    constant: false
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [{ type: "bool", name: "" }],
    name: "mint",
    inputs: [
      { type: "address", name: "to" },
      { type: "uint256", name: "amount" }
    ],
    constant: false
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "address", name: "" }],
    name: "vendingMachine",
    inputs: [],
    constant: true
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "uint256", name: "" }],
    name: "balanceOf",
    inputs: [{ type: "address", name: "owner" }],
    constant: true
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [],
    name: "renounceOwnership",
    inputs: [],
    constant: false
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [],
    name: "changeVendingMachine",
    inputs: [{ type: "address", name: "newVendingMachine" }],
    constant: false
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "address", name: "" }],
    name: "owner",
    inputs: [],
    constant: true
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "bool", name: "" }],
    name: "isOwner",
    inputs: [],
    constant: true
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "string", name: "" }],
    name: "symbol",
    inputs: [],
    constant: true
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [{ type: "bool", name: "" }],
    name: "burn",
    inputs: [
      { type: "address", name: "from" },
      { type: "uint256", name: "value" }
    ],
    constant: false
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [{ type: "bool", name: "" }],
    name: "decreaseAllowance",
    inputs: [
      { type: "address", name: "spender" },
      { type: "uint256", name: "subtractedValue" }
    ],
    constant: false
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [{ type: "bool", name: "" }],
    name: "transfer",
    inputs: [
      { type: "address", name: "to" },
      { type: "uint256", name: "value" }
    ],
    constant: false
  },
  {
    type: "function",
    stateMutability: "view",
    payable: false,
    outputs: [{ type: "uint256", name: "" }],
    name: "allowance",
    inputs: [
      { type: "address", name: "owner" },
      { type: "address", name: "spender" }
    ],
    constant: true
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    payable: false,
    outputs: [],
    name: "transferOwnership",
    inputs: [{ type: "address", name: "newOwner" }],
    constant: false
  },
  {
    type: "constructor",
    stateMutability: "nonpayable",
    payable: false,
    inputs: [
      { type: "string", name: "_name" },
      { type: "string", name: "_symbol" }
    ]
  },
  {
    type: "event",
    name: "TransferWithData",
    inputs: [
      { type: "address", name: "from", indexed: true },
      { type: "address", name: "to", indexed: true },
      { type: "uint256", name: "value", indexed: false },
      { type: "bytes", name: "data", indexed: false }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      { type: "address", name: "previousOwner", indexed: true },
      { type: "address", name: "newOwner", indexed: true }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      { type: "address", name: "from", indexed: true },
      { type: "address", name: "to", indexed: true },
      { type: "uint256", name: "value", indexed: false }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      { type: "address", name: "owner", indexed: true },
      { type: "address", name: "spender", indexed: true },
      { type: "uint256", name: "value", indexed: false }
    ],
    anonymous: false
  }
];
$(document).ready(function() {
  $("#theme").on("change", function(e) {
    e.preventDefault();
    document.location.href = $(this).val();
  });

  $("#skin_tones li:nth-child(1)").addClass("selected");
  $("#hair_tones li:nth-child(1)").addClass("selected");
  document.td_ids = [];
  document.skin_tone = $("#skin_tones li.selected").data("tone");
  document.hair_tone = $("#hair_tones li.selected").data("tone");

  var get_avatar_url = function() {
    var url = "/avatar/view3d?";

    for (var i = 0; i < document.td_ids.length; i += 1) {
      url += "&ids[]=" + document.td_ids[i];
    }
    url += "&skinTone=" + document.skin_tone;
    url += "&hairTone=" + document.hair_tone;

    url += "&theme=bufficorn";
    return url;
  };

  $(".tdselection").click(function(e) {
    e.preventDefault();
    $(this)
      .parents(".category")
      .find(".selected")
      .removeClass("selected");
    $(this).addClass("selected");
    document.td_ids = [];
    $(".tdselection.selected").each(function() {
      document.td_ids.push($(this).data("id"));
    });
    $("#tdavatartarget").attr("src", get_avatar_url());
  });

  $("#skin_tones li").click(function(e) {
    e.preventDefault();
    $(this)
      .parents("#skin_tones")
      .find(".selected")
      .removeClass("selected");
    $(this).addClass("selected");
    document.skin_tone = $(this).data("tone");
    update_all_options();
  });

  var update_all_options = function() {
    $("#tdavatartarget").attr("src", get_avatar_url());
    $(".tdselection").each(function() {
      var new_url =
        $(this).data("src") +
        "&skinTone=" +
        document.skin_tone +
        "&hairTone=" +
        document.hair_tone;

      $(this).data("altsrc", new_url);
      $(this).attr("src", "");
    });
    $(".tdselection:visible").each(function() {
      $(this).attr("src", $(this).data("altsrc"));
    });
  };

  $("#hair_tones li").click(function(e) {
    e.preventDefault();
    $(this)
      .parents("#hair_tones")
      .find(".selected")
      .removeClass("selected");
    $(this).addClass("selected");
    document.hair_tone = $(this).data("tone");
    update_all_options();
  });

  $("#random-3d-avatar-button").click(function(e) {
    e.preventDefault();
    $(".select_avatar_type").each(function() {
      var catclass = $(this).data("target");

      $(".category." + catclass + " .tdselection")
        .random()
        .click();
    });
    $("#skin_tones li")
      .random()
      .click();
    $("#hair_tones li")
      .random()
      .click();
  });

  $(".select_avatar_type").click(function(e) {
    e.preventDefault();
    var target = $(this).data("target");

    $(".select_avatar_type").removeClass("active");
    $(this).addClass("active");
    $("#avatars-builder-3d .category").addClass("hidden");
    $("#avatars-builder-3d ." + target).removeClass("hidden");
    $("#avatars-builder-3d ." + target + " img").each(function() {
      if (!$(this).attr("src")) {
        var src = $(this).data("altsrc");

        $(this).attr("src", src);
      }
    });
  });

  const transferEthDenverAsset = (account) => {
    let amount = 10;
    let token = new web3.eth.Contract(
      ethdenver_abi.abi,
      "0x3E50BF6703Fc132A94E4BAfF068db2055655f11B"
    );
    token.methods
      .transfer(account, web3.utils.toTwosComplement(amount))
      .send({
        from: account
      })
      .on("error", function(error) {
        _alert(
          {
            message: gettext(
              "Could not transfer token to you at this time. Please try again."
            )
          },
          "error"
        );
      });
  };

  async function save3DAvatarTo3Box() {
    var repoPath = `ipfs-${Math.random()}`;
    var ipfs = await Ipfs.create({ repo: repoPath });

    console.log("Saving to 3Box");
    var directoryName = "directory";

    $(document).ajaxStart(function() {
      loading_button($("#save-3d--avatar"));
    });

    $(document).ajaxStop(function() {
      unloading_button($("#save-3d-avatar"));
    });

    var url = get_avatar_url();

    try {
      fetch(url, {
        method: "POST",
        body: JSON.stringify({ save: true }),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
        .then(response => response.text())
        .then(response => {
          window.ethereum.enable().then(async function(accounts) {
            Box.openBox(accounts[0], window.ethereum, {}).then(async function(
              box
            ) {
              const file = {
                path: `${directoryName}/avatar.svg`,
                content: new Blob([response], {
                  type: "image/svg+xml"
                })
              };
              ipfs.add(file, function(err, hash) {
                if (err) {
                  let text = gettext(
                    "Error occurred while saving. Please try again."
                  );
                  console.log("IPFS error ", err);
                  _alert({ message: text }, "error");
                } else {
                  box.public
                    .set("ethdenver.avatar", `/ipfs/${hash[1].hash}/avatar.svg`)
                    .then(success => {
                      const imgObj = [
                        {
                          "@type": "ImageObject",
                          contentUrl: {
                            "/": `${hash[1].hash}/avatar.svg`
                          }
                        }
                      ];
                      box.public.set("image", imgObj).then(result => {
                        _alert(
                          {
                            message: gettext(
                              "Your avatar has been saved using your eth address on 3box!"
                            )
                          },
                          "success"
                        );
                        transferEthDenverAsset(accounts[0])
                        box.close();
                      });
                    });
                }
              });
            });
          });
        });
    } catch (error) {
      console.log("Error ", error);
      let text = gettext("Error occurred while saving. Please try again.");
      _alert({ message: text }, "error");
    }
  }

  $("#save-3d-avatar").click(function() {
    save3DAvatarTo3Box();
  });

  jQuery.fn.random = function() {
    var randomIndex = Math.floor(Math.random() * this.length);

    return jQuery(this[randomIndex]);
  };
});
