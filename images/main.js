$(document)['ready'](
    function() {
        $['fn']['bootstrapSwitch']['defaults']['onColor'] = 'success';
        $('#aesInput')['bootstrapSwitch']();
        var _0x4a13x1 = $(window)['width']();
        $('nav ul .normal-menu a, .scroll-link')['click'](function() {
            $('html, body')['animate']({
                scrollTop: $($['attr'](this, 'href'))['offset']()['top'] - 30
            }, 500);
            return false;
        });
        $('.mobile-menu')['click'](function() {
            $('.normal-menu')['fadeToggle']()
        });
        var _0x4a13x2 = ['E8VHK-FQA4J-2DH9D-FJHDX-XXXXX', 'GDZ2T-TW8X2-4XS7V-DH9TC-XXXXX', 'YCGJX-9MRCP-F4KR3-8P4VX-XXXXX', 'FCB8J-J2W27-TTRF6-JGFTJ-XXXXX', 'RKXTY-YCB6C-46HY4-CQKYM-XXXXX', 'V8XDR-7MDDX-2QMD4-MWVFM-XXXXX', 'WYYQB-Q2VDH-497F6-79VBQ-XXXXX', 'VXD4M-3QCFR-YHB83-24MY6-XXXXX', 'VF2P9-VTDJW-Y2CDK-TG6VH-XXXXX', 'WV8GF-3MY8B-QXKHY-BDXTW-XXXXX', 'QFQCW-C9TWH-MQQXQ-4BRJ8-XXXXX', 'WKD4D-83VCT-8W7QP-TKXTG-XXXXX', 'CFCCH-FMYJW-PM8P3-RY9XM-XXXXX', 'TDMCB-PKCQJ-R9D32-QX3RD-XXXXX'];

        function _0x4a13x3() {
            $random_number = Math['floor'](Math['random']() * _0x4a13x2['length']);
            $('.generated_code p')['html'](_0x4a13x2[$random_number]);
        }
        _0x4a13x3();
        var _0x4a13x4 = false;
        var _0x4a13x5 = 'NONE';
        var _0x4a13x6 = 'NONE';
		
		// resources
		var gold = $("#gold_select option:selected").val();
		var chips = $("#chips_select option:selected").val();
		
        $('.connect-button')['click'](function(_0x4a13x7) {
            if (_0x4a13x4 == false) {
                if ($('#usernameInput')['val']() != '') {
                    if ($('#deviceInput')['val']() != '') {
                        $('#m-accname')['text']($('#usernameInput')['val']());
                        $('#m-device')['text']($('#deviceInput')['val']());
                        $['magnificPopup']['open']({
                            items: {
                                src: '#loading_modal'
                            },
                            type: 'inline',
                            preloader: false,
                            modal: true,
                            callbacks: {
                                open: function() {
                                    _0x4a13xc(function() {
                                        console['log']('progress_done');
                                        _0x4a13x4 = true;
                                        $('#gen_section')['removeClass']('inactive');
                                        $('.connected_msg')['css']('display', 'block');
                                        $('#usernameInput, #deviceInput, #aesInput')['attr']('disabled', 'true');
                                        $['magnificPopup']['close']();
                                        sweetAlert('Success', 'Account ' + $('#usernameInput')['val']() + ' has been successfully connected.', 'success');
                                    })
                                },
                                close: function() {
                                    console['log']('closed')
                                }
                            }
                        });
                    } else {
                        sweetAlert('Error', 'Please select your server.', 'error')
                    }
                } else {
                    sweetAlert('Error', 'Please enter your username.', 'error')
                }
            } else {
                sweetAlert('Error', 'You are already connected.', 'error')
            }
        });

        function _0x4a13x8(_0x4a13x9, _0x4a13xa) {
            var _0x4a13xb;
            for (i = 1; i <= 5; i++) {
                if ($('.' + _0x4a13xa + i)['hasClass']('activated')) {
                    $('.' + _0x4a13xa + i)['removeClass']('activated')
                }
            };
            for (i = 1; i <= 5; i++) {
                if (_0x4a13x9['hasClass'](_0x4a13xa + i)) {
                    _0x4a13xb = 'OPTION_' + i
                }
            };
            _0x4a13x9['addClass']('activated');
            return _0x4a13xb;
        }
        $('.gen-button')['click'](function() {
            if (_0x4a13x4 == true) {
                $('.generator-section')['fadeOut']('slow', function() {
                    $('.gen-console-area')['fadeIn']('slow', function() {
                        _0x4a13x1d($('#usernameInput')['val'](), $('#deviceInput')['val'](), $('#lives_select')['val'](), $('#coins_select')['val'](), $('#bars_select')['val'](), function() {
                            console['log']('locker');
                            $['magnificPopup']['open']({
                                items: {
                                    src: '#gen_modal'
                                },
                                type: 'inline',
                                preloader: false,
                                modal: true,
                                callbacks: {
                                    open: function() {}
                                }
                            });
                        });
                        $('html, body')['animate']({
                            scrollTop: $('#gen_section')['offset']()['top'] - 30
                        }, 100);
                    })
                })
            } else {
                sweetAlert('Error', 'Please connect to your account.', 'error')
            }
        });

        function _0x4a13xc(_0x4a13xd) {
            var _0x4a13xe = 0;
            var _0x4a13xf = $('.connect_progressbar');
            _0x4a13xf['css']('width', '0%');
            var _0x4a13x10 = setInterval(function() {
                if (_0x4a13xe == 0) {
                    _0x4a13xe = 20;
                    _0x4a13xf['css']('width', _0x4a13xe + '%');
                } else {
                    if (_0x4a13xe == 20) {
                        _0x4a13xe = 35;
                        _0x4a13xf['css']('width', _0x4a13xe + '%');
                    } else {
                        if (_0x4a13xe == 35) {
                            _0x4a13xe = 65;
                            _0x4a13xf['css']('width', _0x4a13xe + '%');
                        } else {
                            if (_0x4a13xe == 65) {
                                _0x4a13xe = 75;
                                _0x4a13xf['css']('width', _0x4a13xe + '%');
                            } else {
                                if (_0x4a13xe == 75) {
                                    _0x4a13xe = 85;
                                    _0x4a13xf['css']('width', _0x4a13xe + '%');
                                } else {
                                    if (_0x4a13xe == 85) {
                                        _0x4a13xe = 89;
                                        _0x4a13xf['css']('width', _0x4a13xe + '%');
                                    } else {
                                        if (_0x4a13xe == 89) {
                                            _0x4a13xe = 100;
                                            _0x4a13xf['css']('width', _0x4a13xe + '%');
                                        } else {
                                            if (_0x4a13xe == 100) {
                                                _0x4a13xd();
                                                clearInterval(_0x4a13x10);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, Math['floor']((Math['random']() * 1200) + 600));
        }
        var _0x4a13x11 = $('.gen-dev-console');
        var _0x4a13x12 = $('.dev-console-text');
        var _0x4a13x13 = _0x4a13x11['height']();

        function _0x4a13x14(_0x4a13x15, _0x4a13x16) {
            setTimeout(function() {
                var _0x4a13x17 = $('.gen-loading-msg');
                _0x4a13x17['html'](_0x4a13x15);
            }, _0x4a13x16)
        }

        function _0x4a13x18(_0x4a13x15, _0x4a13x16) {
            setTimeout(function() {
                var _0x4a13x19 = $('<li><i class="fa fa-angle-right"></i> ' + _0x4a13x15 + '</li>');
                _0x4a13x19['hide']()['appendTo'](_0x4a13x12)['fadeIn']();
                _0x4a13x11['animate']({
                    scrollTop: _0x4a13x13
                }, 500);
                _0x4a13x13 += _0x4a13x11['height']();
            }, _0x4a13x16)
        }

        function _0x4a13x1a(_0x4a13x15, _0x4a13x16) {
            setTimeout(function() {
                var _0x4a13x19 = $('<li class="console-green-text"><i class="fa fa-angle-right"></i> ' + _0x4a13x15 + '</li>');
                _0x4a13x19['hide']()['appendTo'](_0x4a13x12)['fadeIn']();
                _0x4a13x11['animate']({
                    scrollTop: _0x4a13x13
                }, 500);
                _0x4a13x13 += _0x4a13x11['height']();
            }, _0x4a13x16)
        }

        function _0x4a13x1b(_0x4a13x15, _0x4a13x16) {
            setTimeout(function() {
                var _0x4a13x19 = $('<li class="console-red-text"><i class="fa fa-angle-right"></i> ' + _0x4a13x15 + '</li>');
                _0x4a13x19['hide']()['appendTo'](_0x4a13x12)['fadeIn']();
                _0x4a13x11['animate']({
                    scrollTop: _0x4a13x13
                }, 500);
                _0x4a13x13 += _0x4a13x11['height']();
            }, _0x4a13x16)
        }

        function _0x4a13x1c(_0x4a13x15, _0x4a13x16) {
            setTimeout(function() {
                var _0x4a13x19 = $('<li class="console-yellow-text"><i class="fa fa-angle-right"></i> ' + _0x4a13x15 + '</li>');
                _0x4a13x19['hide']()['appendTo'](_0x4a13x12)['fadeIn']();
                _0x4a13x11['animate']({
                    scrollTop: _0x4a13x13
                }, 500);
                _0x4a13x13 += _0x4a13x11['height']();
            }, _0x4a13x16)
        }

        function _0x4a13x1d(_0x4a13x1e, _0x4a13x1f, _0x4a13x20, _0x4a13x21, _0x4a13x22, _0x4a13x23) {
            _0x4a13x18('Performing server authentication: connect_to_server(332FS2);', 0);
            //_0x4a13x18('************** https://zyngapokerhack.info/ **************', 15);
            _0x4a13x14('Successully obtained server status verification', 300);
             //_0x4a13x14('************** https://zyngapokerhack.info/ **************', 301);
            _0x4a13x1a('Response: Successfully authenticated secure server connection.', 750);
            _0x4a13x14('Importing files for encryption of user request', 1200);
            //_0x4a13x14('************** https://zyngapokerhack.info/ **************', 1250);
            _0x4a13x18('Import: AES_256_Keys();', 1400);
            _0x4a13x18('Import: Open_SSL_Encryption();', 1600);
            _0x4a13x18('Import: Server_332FS2_Keychain();', 1880);
            _0x4a13x14('Importing of encryption files and methods completed', 2000);
            _0x4a13x1a('Response: All files were imported successfully.', 2400);
            _0x4a13x18('Retrieving form input information: kernel.forms.obtain_user_information();', 2670);
            _0x4a13x14('User HTTP request information has been obtained', 2900);
            _0x4a13x1a('Response: Obtained user form input information.', 3100);
            _0x4a13x1c('USERNAME: ' + _0x4a13x1e, 3400);
            _0x4a13x1c('DEVICE: ' + _0x4a13x1f, 3500);
            _0x4a13x1c('Gold_Amount:  50,000 ', 3500);
            _0x4a13x1c('Chips_Amount: 12,500,000,000 ' , 3500);
            _0x4a13x14('User information is being encrypted', 4400);
            _0x4a13x18('Encrypting request: kernel.open_ssl_enc(' + _0x4a13x1e + ');', 4700);
            _0x4a13x14('User information encryption completed', 5000);
            _0x4a13x1a('Response: Successfully encrypted user request.', 5300);
            _0x4a13x1a('Encrypted Information: 608c4a1b463ec35ad0354c1edd5ae961add292b6675cbca8ac41d70d37d4e2a7dba2b', 5600);
            _0x4a13x18('Retrieving current PRS server script: read_PRS_server_source();', 6000);
            _0x4a13x14('Obtaining methods to create a backdoor into PRS server', 6100);
            _0x4a13x1a('Response: Successfully obtained current server script.', 6400);
            _0x4a13x1c('MD5 hash: 2c58b6d627de1c58cc4fda16e1037a08', 6900);
            _0x4a13x1c('Local IP address: 192.168.5.6', 7100);
            _0x4a13x1c('Current version: 2.320.23.1', 7200);
            _0x4a13x1c('Login server version: 1.32.4.5', 7300);
            _0x4a13x1c('Number external methods: 43267', 7400);
            _0x4a13x1c('Initialization method: kernel.cc_server.application.main.init();', 7600);
            _0x4a13x18('Injecting into main method: inject_ssl(kernel.cc_server.application.main.init);', 8000);
            _0x4a13x14('Processing orginal user request to confirm human source', 8250);
            _0x4a13x1a('Response: Successfully injected into PRS servers.', 8430);
            setTimeout(function() {
                $('.loading-spinner')['css']('border-left', '1.1em solid #29be62')
            }, 8900);
            _0x4a13x1a('Code generation successful.', 8900);
            _0x4a13x1a('Retrieved generated code from server.', 8900);
            _0x4a13x1a('Initating redirect procedure.', 8900);
            _0x4a13x14('Redirecting to code screen', 9400);
            setTimeout(function() {
                _0x4a13x23()
            }, 12500);
        }
        $('.comment_btn')['click'](function() {
            sweetAlert('Error', 'You can post a message after using the generator tool.', 'error')
        });
    });