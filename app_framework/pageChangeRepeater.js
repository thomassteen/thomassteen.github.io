/*
 * Copyright (C) 2014 Intel Corporation. All rights reserved.
 */

/*
 * This script initializes a repeater to correctly trigger a page change
 * in App Framework.
 */
$(function() {
  "use strict";
  $(document).on('loadpanel', function(){
    $(document).trigger('pagechange');
  });
});
