<?php 

if (!function_exists('file_remove')) {
    function file_remove($dir, $fileName){
        if(file_exists(public_path('uploads/' .$dir. '/' . $fileName))  && !is_null($fileName)){
            unlink(public_path('uploads/'  .$dir. '/' . $fileName));
        }

        if(file_exists(public_path('popup/' .$dir. '/' . $fileName))  && !is_null($fileName)){
            unlink(public_path('popup/' .$dir. '/' . $fileName));
        }

        if(file_exists(public_path('tablet/' .$dir. '/' . $fileName))  && !is_null($fileName)){
            unlink(public_path('tablet/' .$dir. '/' . $fileName));
        }
    }


}