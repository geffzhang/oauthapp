﻿//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行时版本:4.0.30319.42000
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

namespace OAuthApp {
    using System;
    
    
    /// <summary>
    ///   一个强类型的资源类，用于查找本地化的字符串等。
    /// </summary>
    // 此类是由 StronglyTypedResourceBuilder
    // 类通过类似于 ResGen 或 Visual Studio 的工具自动生成的。
    // 若要添加或移除成员，请编辑 .ResX 文件，然后重新运行 ResGen
    // (以 /str 作为命令选项)，或重新生成 VS 项目。
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "16.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    internal class AppResource {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal AppResource() {
        }
        
        /// <summary>
        ///   返回此类使用的缓存的 ResourceManager 实例。
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("OAuthApp.AppResource", typeof(AppResource).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   重写当前线程的 CurrentUICulture 属性
        ///   重写当前线程的 CurrentUICulture 属性。
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   查找 System.Byte[] 类型的本地化资源。
        /// </summary>
        internal static byte[] ClearScriptV8_win_x64 {
            get {
                object obj = ResourceManager.GetObject("ClearScriptV8_win_x64", resourceCulture);
                return ((byte[])(obj));
            }
        }
        
        /// <summary>
        ///   查找 System.Byte[] 类型的本地化资源。
        /// </summary>
        internal static byte[] ClearScriptV8_win_x86 {
            get {
                object obj = ResourceManager.GetObject("ClearScriptV8_win_x86", resourceCulture);
                return ((byte[])(obj));
            }
        }
        
        /// <summary>
        ///   查找类似 &lt;?xml version=&quot;1.0&quot;?&gt;
        ///&lt;doc&gt;
        ///    &lt;assembly&gt;
        ///        &lt;name&gt;OAuthApp&lt;/name&gt;
        ///    &lt;/assembly&gt;
        ///    &lt;members&gt;
        ///        &lt;member name=&quot;T:OAuthApp.Apis.ApiResourceController&quot;&gt;
        ///            &lt;summary&gt;
        ///            API
        ///            &lt;/summary&gt;
        ///            &lt;remarks&gt;为API提供版本管理、网关集成都功能。&lt;/remarks&gt;
        ///        &lt;/member&gt;
        ///        &lt;member name=&quot;M:OAuthApp.Apis.ApiResourceController.#ctor(IdentityServer4.EntityFramework.DbContexts.ConfigurationDbContext,OAuthApp.Data.UserDbContext,Microsoft.Extensions.Localization.IStringLoca [字符串的其余部分被截断]&quot;; 的本地化字符串。
        /// </summary>
        internal static string OAuthApp {
            get {
                return ResourceManager.GetString("OAuthApp", resourceCulture);
            }
        }
        
        /// <summary>
        ///   查找 System.Byte[] 类型的本地化资源。
        /// </summary>
        internal static byte[] oauthapp1 {
            get {
                object obj = ResourceManager.GetObject("oauthapp1", resourceCulture);
                return ((byte[])(obj));
            }
        }
    }
}
